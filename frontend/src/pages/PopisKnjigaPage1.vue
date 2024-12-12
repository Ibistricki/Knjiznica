<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        separator="horizontal"
        title="Popis knjiga"
        title-class="text-h4 text-bold text-red-9"
        :rows="books"
        :columns="columns"
        row-key="id"
        table-class="text-black"
        table-style="border: 3px solid black;"
        table-header-style="height: 65px"
        table-header-class="bg-red-2"
        bordered
        flat
        square
      >
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              <span v-if="col.name != 'slika' && col.name != 'opis'">
                {{ col.value }}
              </span>
              <div v-if="col.name == 'opis'">
                <div class="tbl_opis">
                  {{ props.row.opis }}
                </div>
              </div>
              <q-img
                :src="props.row.slika"
                v-if="col.name == 'slika'"
                size="100px"
                class="shadow-10"
              ></q-img>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

const style1 = {
  fontSize: '18px',
};
const style2 = {
  fontSize: '24px',
};

const columns = [
  {
    name: 'id',
    label: 'ID',
    field: 'id',
    align: 'left',
    sortable: true,
    style: style1,
    headerStyle: style2,
  },
  {
    name: 'naslov',
    label: 'Naslov',
    field: 'naslov',
    align: 'left',
    sortable: true,
    style: style1,
    headerStyle: style2,
  },
  {
    name: 'autor',
    label: 'Autor',
    field: 'autor',
    align: 'left',
    style: style1,
    headerStyle: style2,
  },
  {
    name: 'opis',
    label: 'Opis',
    field: 'opis',
    align: 'left',
    style: style1,
    headerStyle: style2,
  },
  {
    name: 'slika',
    label: 'Slika',
    field: 'slika',
    align: 'center',
    style: style1,
    headerStyle: style2,
  },
  {
    name: 'stanje',
    label: 'Stanje',
    field: 'stanje',
    align: 'center',
    style: style1,
    headerStyle: style2,
  },
];

const books = ref([]);

export default {
  setup() {
    return {
      columns,
      books,
      pagination: ref({
        rowsPerPage: 10,
      }),
    };
  },

  mounted() {
    this.loadBooks();
  },

  methods: {
    async loadBooks() {
      try {
        const response = await axios.get('http://localhost:3000/api/knjige/');
        console.log('Podaci:', response.data);
        books.value = response.data; // Ispravno postavljanje vrijednosti
      } catch (error) {
        console.error('Greška u ucitavanju knjiga:', error);
      }
    },
  },
};
</script>

<style>
.tbl_opis {
  white-space: pre-wrap;
  word-wrap: break-word;
  max-width: 300px;
}
</style>
