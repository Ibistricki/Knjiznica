const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const PORT = 3000;

// Omogućava parsiranje JSON tijela zahtjeva
app.use(express.json());
app.use(cors());

// Postavke za povezivanje na MySQL bazu podataka
const dbConfig = {
    host: "localhost",
    user: "Ibistricki", 
    password: "11",
    database: "database",
};

// Stvaranje veze s bazom podataka
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.error("Pogreška pri povezivanju na bazu podataka:", err.message);
        return;
    }
    console.log("Uspješno povezano na bazu podataka!");
});

// === ROUTES ===

// Ruta za dohvaćanje svih knjiga iz baze
app.get("/api/knjige", (req, res) => {
    const query = "SELECT * FROM knjiga";
    connection.query(query, (err, results) => {
        if (err) {
            console.error("Pogreška pri dohvaćanju knjiga:", err.message);
            return res.status(500).json({ error: "Neuspješno dohvaćanje knjiga." });
        }
        res.json(results); // Vraća popis svih knjiga
    });
});

// Ruta za dodavanje nove rezervacije knjige
app.post("/api/rezervacije", (req, res) => {
    const { id_knjiga, id_korisnik } = req.body;
    const today = new Date().toISOString().split("T")[0]; // Formatirani trenutni datum
    const query = "INSERT INTO rezervacija (datum, knjiga, korisnik) VALUES (?, ?, ?)";

    connection.query(query, [today, id_knjiga, id_korisnik], (err, results) => {
        if (err) {
            console.error("Pogreška pri kreiranju rezervacije:", err.message);
            return res.status(500).json({ error: "Neuspješno kreiranje rezervacije." });
        }
        res.json({ message: "Rezervacija uspješno stvorena!", id: results.insertId });
    });
});

// Ruta za dohvaćanje slobodnih knjiga (knjige koje nisu rezervirane)
app.get("/api/knjige/slobodne", (req, res) => {
    const query = `
        SELECT knjiga.id, knjiga.naslov, knjiga.autor,
        knjiga.stanje - COUNT(rezervacija.knjiga) AS slobodne
        FROM knjiga
        LEFT JOIN rezervacija ON knjiga.id = rezervacija.knjiga
        GROUP BY knjiga.id;
    `;
    connection.query(query, (err, results) => {
        if (err) {
            console.error("Pogreška pri dohvaćanju slobodnih knjiga:", err.message);
            return res.status(500).json({ error: "Neuspješno dohvaćanje slobodnih knjiga." });
        }
        res.json(results); // Vraća popis slobodnih knjiga
    });
});

// Ruta za dohvaćanje svih korisnika iz baze
app.get("/api/korisnici", (req, res) => {
    const query = "SELECT * FROM korisnik";
    connection.query(query, (err, results) => {
        if (err) {
            console.error("Pogreška pri dohvaćanju korisnika:", err.message);
            return res.status(500).json({ error: "Neuspješno dohvaćanje korisnika." });
        }
        res.json(results); // Vraća popis svih korisnika
    });
});

// Ruta za dohvaćanje korisnika prema ID-u
app.get("/api/korisnici/:id", (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM korisnik WHERE id = ?";
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error("Pogreška pri dohvaćanju korisnika:", err.message);
            return res.status(500).json({ error: "Neuspješno dohvaćanje korisnika." });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: "Korisnik nije pronađen." });
        }
        res.json(results[0]); // Vraća podatke o traženom korisniku
    });
});

// Ruta za ažuriranje korisnika (izmjena podataka korisnika)
app.put("/api/korisnici/:id", (req, res) => {
    const { id } = req.params;
    const { ime, prezime, email } = req.body;
    const query = "UPDATE korisnik SET ime = ?, prezime = ?, email = ? WHERE id = ?";
    connection.query(query, [ime, prezime, email, id], (err, results) => {
        if (err) {
            console.error("Pogreška pri ažuriranju korisnika:", err.message);
            return res.status(500).json({ error: "Neuspješno ažuriranje korisnika." });
        }
        res.json({ message: "Korisnik uspješno ažuriran." });
    });
});

// === ERROR HANDLING ===
// Middleware za hvatanje grešaka
app.use((err, req, res, next) => {
    console.error("Neočekivana pogreška:", err.message);
    res.status(500).json({ error: "Dogodila se greška." });
});

// === SERVER ===
// Pokretanje servera na zadanom portu
app.listen(PORT, () => {
    console.log(`Server pokrenut na adresi: http://localhost:${PORT}`);
});
