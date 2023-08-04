import { Imobile } from "../models/mobiles";

export const mobileProducts:Array<Imobile> = [
    {
    id: 1,
    name: 'iPhone 13',
    brand: 'Apple',
    price: 999,
    image: 'https://www.google.com/aclk?sa=l&ai=DChcSEwjcn4uM9MKAAxXgmmYCHZi1DDMYABAHGgJzbQ&ase=2&sig=AOD64_1fMpuBgFKNeuA_AcyF811ZcaVzGw&ctype=5&nis=5&adurl&ved=2ahUKEwjNwoCM9MKAAxVOz6ACHefRAQwQvhd6BQgBEIsB',
    isAvailable: true,
},
    {
    id: 2,
    name: 'Samsung Galaxy S21',
    brand: 'Samsung',
    price: 899,
    image:'',
    
    isAvailable: false,
},
    {
    id: 3,
    name: 'Google Pixel 6',
    brand: 'Google',
    price: 799,
    image: 'https://www.google.com/aclk?sa=l&ai=DChcSEwj0o4Os9MKAAxXFlMIKHcW2CewYABAJGgJ0bQ&ase=2&sig=AOD64_0PoKqrjWuHJxw-VYdJecVVR7-cLw&ctype=5&nis=5&adurl&ved=2ahUKEwi0tver9MKAAxVOx6ACHSZCBYkQvhd6BQgBEJAB',
    isAvailable: true,
},
    {
    id: 4,
    name: 'OnePlus 9 Pro',
    brand: 'OnePlus',
    price: 899,
    image: 'https://www.croma.com/oneplus-11r-5g-16gb-ram-256gb-galactic-silver-/p/269148',
    isAvailable: true,
    },
    {
    id: 5,
    name: 'Xiaomi Mi 11',
    brand: 'Xiaomi',
    price: 699,
    image: 'https://www.google.com/aclk?sa=l&ai=DChcSEwilypje9MKAAxUReCsKHdKgDCoYABAHGgJzZg&ase=2&sig=AOD64_0GMPGvVAL_HRfZiFnDHukl3jY2bw&ctype=5&nis=5&adurl&ved=2ahUKEwjW74ve9MKAAxXEmmMGHXWHAJUQwg96BQgBEIIB',
    isAvailable: true,
},
    {
    id: 6,
    name: 'Sony Xperia 1 III',
    brand: 'Sony',
    price: 1199,
    image: 'data:image/jpeg;base64,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',
    isAvailable: true,
    },
    {
    id: 7,
    name: 'LG Velvet',
    brand: 'LG',
    price: 599,
    image: '',
    isAvailable: false,
    },
    {
    id: 8,
    name: 'Huawei P40 Pro',
    brand: 'Huawei',
    price: 899,
    image: 'data:image/jpeg;base64,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',
    isAvailable: true,
    },
    {
    id: 9,
    name: 'Motorola Moto G Power',
    brand: 'Motorola',
    price: 249,
    image: 'data:image/jpeg;base64,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',
    isAvailable: true,
    },
    {
    id: 10,
    name: 'Nokia 8.3',
    brand: 'Nokia',
    price: 499,
    image: 'data:image/jpeg;base64,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',
    isAvailable: true,
    }
];
