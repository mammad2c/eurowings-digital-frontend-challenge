<template>
  <FormWrapper
    autocorrect="off"
    autocapitalize="off"
    autocomplete="off"
    spellcheck="false"
    class="full-width search-flights-form"
    @submit="handleSubmit"
  >
    <div class="row justify-center items-center">
      <div class="col-12 col-sm-6 col-md-2 q-pa-sm">
        <UISelect v-model="form.origin" label="Origin" :rules="isRequired" />
      </div>
      <div class="col-12 col-sm-6 col-md-2 q-pa-sm">
        <UISelect
          v-model="form.destination"
          label="Destination"
          :rules="isRequired"
        />
      </div>
      <div class="col-12 col-sm-6 col-md-2 q-pa-sm">
        <DatePicker
          v-model="form.departureDate"
          label="Departure date"
          :rules="isRequired"
        />
      </div>
      <div class="col-12 col-sm-6 col-md-2 q-pa-sm">
        <UIButton color="primary" type="submit"> Search flights </UIButton>
      </div>
    </div>
  </FormWrapper>
</template>

<script setup lang="ts">
import { UISelect, UIButton } from "@/ui";
import { FormWrapper, DatePicker } from "@/components";
import { isRequired } from "@/services";

const form = reactive({
  origin: "",
  destination: "",
  departureDate: "",
});

const handleSubmit = () => {
  // handle form submit
};
</script>
