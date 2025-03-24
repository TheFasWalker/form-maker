<template>
    <MainLayout>
        <FormGenerator 
        main-title="Пример формы №1"
            :fields="formFields" 
            v-model:modelValue="formData" 
            @save="onSave" 
            @cancel="onCancel">
            <template #name="{ value, update: valueUpdate }">
                <label for="custom-name">Custom Name:</label>
                <input type="text" id="custom-name" :value="value" @input="
                    (event) => {
                        valueUpdate(event.target.value);
                    }
                " />
            </template>
        </FormGenerator>
    </MainLayout>
</template>
<script setup lang="ts">
import FormGenerator from '../components/formGenerator/FormGenerator.vue';
import MainLayout from '../components/layout/MainLayout.vue';
import { reactive } from 'vue';

const formFields = {
    name: { label: 'Имя', type: 'input', inputType: 'text', attributes: { placeholder: 'Как к вам обращаться' } },
    email: { label: 'Email', type: 'input', inputType: 'email', attributes: { required: true } },
    gender: {
        label: 'Пол',
        type: 'select',
        options: [
            { label: 'М', value: 'male' },
            { label: 'Ж', value: 'female' },
        ],
    },
    interests: {
        label: 'Интересы',
        type: 'checkbox',
        options: [
            { label: 'Спорт', value: 'reading' },
            { label: 'Дайвинг', value: 'diving' },
            { label: 'airsofr', value: 'airsoft' },
            { label: 'Танки xD', value: 'WOT' },
        ],
    },
    description: { label: 'Блок текста', type: 'textarea', attributes: { rows: 3 } },
};

const formData = reactive({
    name: '',
    email: '',
    gender: '',
    interests: [],
    description: '',
});

const onSave = (data: any) => {
    console.log('Form Data Saved:', data);
};

const onCancel = () => {
    console.log('Form Canceled');
};
</script>