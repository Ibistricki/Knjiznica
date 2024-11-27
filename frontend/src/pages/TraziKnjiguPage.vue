<template>
  <q-page padding>
    <!-- Pretraga knjiga -->
    <q-card dark bordered class="bg-white my-card">
      <q-card-section>
        <div class="text-h3 text-weight-bolder">Pretraga knjiga</div>

        <!-- Pretraga knjiga -->
        <q-input
          filled
          v-model="searchQuery"
          label="Pretraži knjige"
          debounce="300"
          class="q-mt-md"
          placeholder="Unesite naziv knjige..."
        />
      </q-card-section>

      <q-card-section>
        <!-- Lista sa filtriranim knjigama -->
        <q-list bordered>
          <!-- Iteriraj kroz filtrirane knjige -->
          <q-item v-for="book in filteredBooks" :key="book.id">
            <q-item-section>
              <div class="text-h5">{{ book.title }}</div>
              <div class="text-body2">Autor: {{ book.author }}</div>
              <div class="text-body2">Godina: {{ book.year }}</div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "BookSearchPage",
  setup() {
    // Pretraga
    const searchQuery = ref(""); // Model za unos pretrage

    // Popis knjiga
    const books = [
      { id: 1, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
      { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
      { id: 3, title: "1984", author: "George Orwell", year: 1949 },
      { id: 4, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    ];

    // Filtrirani popis knjiga na temelju pretrage
    const filteredBooks = computed(() => {
      if (searchQuery.value === "") {
        return books;
      }
      return books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    return {
      searchQuery,
      filteredBooks,
    };
  },
};
</script>

<style scoped>
.my-card {
  width: 100%;
  background-color: white; 
  color: black
}
</style>
