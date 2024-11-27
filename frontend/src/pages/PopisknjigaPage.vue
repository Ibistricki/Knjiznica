<template>
  <q-page padding>
    
    <h5>Popis knjiga</h5>
    <p>Ovdje se nalazi popis knjiga</p>

   
    <q-table :rows="books" :columns="columns" row-key="id" class="q-mt-md" />
  </q-page>
</template>

<script>
export default {
  name: "BookListPage",

  data() {
    return {
      
      books: [
        { id: 1, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
        { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { id: 3, title: "1984", author: "George Orwell", year: 1949 },
        { id: 4, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
      ],


      columns: [
        {
          name: "title",
          label: "Naslov",
          align: "left",
          field: (row) => row.title,
        },
        {
          name: "title",
          label: "Naslov",
          align: "left",
          field: (row) => row.title,
        },
        {
          name: "author",
          label: "Autor",
          align: "left",
          field: (row) => row.author,
        },
        {
          name: "year",
          label: "Godina",
          align: "center",
          field: (row) => row.year,
        },
      ],
    };
  },
};
</script>