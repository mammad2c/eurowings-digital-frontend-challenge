<template>
  <FormWrapper
    autocorrect="off"
    autocapitalize="off"
    autocomplete="off"
    spellcheck="false"
    class="full-width search-flights-form q-pa-md"
    @submit="handleSubmit"
  >
    <div class="row">
      <div class="col-12 col-md-2 q-pa-sm">
        <UISelect
          v-model="selectedTrip"
          :options="tripOptions"
          emit-value
          map-options
          option-label="label"
          dense
          data-testid="trips-selector"
        />
      </div>
    </div>
    <div class="row justify-center items-center">
      <div class="col-12 col-sm-6 col-md-2 q-pa-sm">
        <UISelect
          v-model="form.origin"
          label="Origin"
          :rules="isRequired"
          :options="airports"
          option-label="name"
          option-value="id"
          emit-value
          map-options
          use-input
          dense
          hide-bottom-space
          fill-input
          hide-selected
          :loading="pending"
        />
      </div>
      <div class="col-12 col-sm-6 col-md-2 q-pa-sm">
        <UISelect
          v-model="form.destination"
          label="Destination"
          :rules="isRequired"
          :options="airports"
          option-label="name"
          option-value="id"
          emit-value
          map-options
          use-input
          fill-input
          hide-selected
          dense
          hide-bottom-space
          :loading="pending"
        />
      </div>
      <div class="col-12 col-sm-6 col-md-2 q-pa-sm">
        <DatePicker
          v-model="form.departureDate"
          :label="datePickerLabel"
          :rules="isRequired"
          dense
          hide-bottom-space
          :options="minDate"
          :range="isRange"
        />
      </div>
      <div class="col-12 col-sm-6 col-md-3 q-pa-sm">
        <UIButton color="primary" type="submit" class="full-width">
          Search flights
        </UIButton>
      </div>
    </div>
  </FormWrapper>
</template>

<script setup lang="ts">
import { UISelect, UIButton } from "@/ui";
import { FormWrapper, DatePicker } from "@/components";
import { isRequired } from "@/services";

const { data: dataAirports, pending } = useLazyFetch("/api/airports");

const form = reactive({
  origin: "",
  destination: "",
  departureDate: "",
});

const tripOptions = [
  {
    value: "round-trip",
    label: "Round trip",
  },
  {
    value: "one-way",
    label: "One way",
  },
];

const selectedTrip = ref("round-trip");

const airports = computed(() => {
  if (dataAirports.value !== null) {
    return dataAirports.value;
  }

  return [];
});

const today = new Date();
const yyyy = today.getFullYear();
let mm: string | number = today.getMonth() + 1; // Months start at 0!
let dd: string | number = today.getDate();

if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;

const formattedToday = `${yyyy}/${mm}/${dd}`;

const minDate = (date: string) => {
  if (date >= formattedToday) {
    return true;
  }

  return false;
};

const isRange = computed(() => selectedTrip.value === "round-trip");

const datePickerLabel = computed(() =>
  isRange.value ? "Departure - return" : "Departure",
);

watch(isRange, () => {
  form.departureDate = "";
});

const handleSubmit = () => {
  // handle form submit
};
</script>
