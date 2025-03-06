var productsList = [
  {
    id: 1,
    name: "HP Victus",
    price: 65990,
    OriginalPrice: 76354,
    Offer: "13%",
    stock: 99,
    src: "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/a/w/g/-original-imah9qkynfhj3zp9.jpeg?q=70&crop=false",
    description:
      "HP Victus Intel Core i5 13th Gen 13420H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050)",
  },
  {
    id: 2,
    name: "ASUS ROG Strix",
    price: 87990,
    OriginalPrice: 99990,
    Offer: "12%",
    stock: 50,
    src: "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/r/7/n/-original-imah4dj6yky5e9hq.jpeg?q=70&crop=false",
    description:
      "ASUS ROG Strix G15 Ryzen 7 Octa Core 6800H - (16 GB/1 TB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 3060)",
  },
  {
    id: 3,
    name: "Lenovo Legion 5",
    price: 92999,
    OriginalPrice: 105999,
    Offer: "12%",
    stock: 70,
    src: "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/o/8/q/16ach6h-gaming-laptop-lenovo-original-imah3cs2sfcabg6a.jpeg?q=70&crop=false",
    description:
      "Lenovo Legion 5 Intel Core i7 12th Gen - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 3060)",
  },
  {
    id: 4,
    name: "Acer Predator Helios",
    price: 115000,
    OriginalPrice: 129999,
    Offer: "11%",
    stock: 40,
    src: "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/g/v/k/-original-imahyf9hhhhzehej.jpeg?q=70&crop=false",
    description:
      "Acer Predator Helios 300 Intel Core i9 13th Gen - (32 GB/1 TB SSD/Windows 11 Home/8 GB Graphics/NVIDIA GeForce RTX 4080)",
  },
  {
    id: 5,
    name: "Dell G15",
    price: 73999,
    OriginalPrice: 82999,
    Offer: "10%",
    stock: 0,
    src: "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/r/g/9/g15-5530-gaming-laptop-dell-original-imah8hhzdfqumtdy.jpeg?q=70&crop=false",
    description:
      "Dell G15 Ryzen 7 Octa Core 5800H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050)",
  },
  {
    id: 6,
    name: "MSI Katana GF66",
    price: 89990,
    OriginalPrice: 99990,
    Offer: "10%",
    stock: 65,
    src: "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/i/j/b/-original-imah4ha3ummd36h2.jpeg?q=70&crop=false",
    description:
      "MSI Katana GF66 Intel Core i7 12th Gen - (16 GB/1 TB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 3060)",
  },
  {
    id: 7,
    name: "HP Pavilion Gaming",
    price: 58990,
    OriginalPrice: 65990,
    Offer: "11%",
    stock: 0,
    src: "https://rukminim2.flixcart.com/image/832/832/krjjde80/computer/z/d/x/na-gaming-laptop-hp-original-imag5bg5uzy2zckc.jpeg?q=70&crop=false",
    description:
      "HP Pavilion Gaming Intel Core i5 11th Gen - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650)",
  },
  {
    id: 8,
    name: "Apple MacBook Air M2",
    price: 104900,
    OriginalPrice: 119900,
    Offer: "12%",
    stock: 30,
    src: "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/1/n/p/-original-imagfdfew8gszzhk.jpeg?q=70&crop=false",
    description: "Apple MacBook Air M2 Chip (8 GB/256 GB SSD/macOS)",
  },
  {
    id: 9,
    name: "Razer Blade 15",
    price: 185000,
    OriginalPrice: 199999,
    Offer: "8%",
    stock: 0,
    src: "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/u/g/m/14iah8-thin-and-light-laptop-lenovo-original-imah4bzahunvm3az.jpeg?q=70&crop=false",
    description:
      "Razer Blade 15 Intel Core i7 12th Gen - (32 GB/1 TB SSD/Windows 11 Home/8 GB Graphics/NVIDIA GeForce RTX 3080 Ti)",
  },
  {
    id: 10,
    name: "ASUS TUF Gaming F15",
    price: 67990,
    OriginalPrice: 76990,
    Offer: "12%",
    stock: 90,
    src: "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/j/o/q/-original-imagpbycz5gn5mvz.jpeg?q=70&crop=false",
    description:
      "ASUS TUF Gaming F15 Intel Core i5 12th Gen - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050)",
  },
  {
    id: 11,
    name: "Acer Nitro 5",
    price: 82990,
    OriginalPrice: 89990,
    Offer: "8%",
    stock: 55,
    src:'https://rukminim2.flixcart.com/image/832/832/xif0q/computer/y/t/u/-original-imaghhe6ttguxzkq.jpeg?q=70&crop=false',
    description:
      "Acer Nitro 5 Ryzen 7 Octa Core 6800H - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 3060)",
  },
  {
    id: 12,
    name: "Samsung Galaxy Book 3",
    price: 74990,
    OriginalPrice: 82990,
    Offer: "9%",
    stock: 80,
    src:'https://rukminim2.flixcart.com/image/832/832/xif0q/computer/i/h/c/-original-imahfu5njqfqkhvk.jpeg?q=70&crop=false',
    description:
      "Samsung Galaxy Book 3 Intel Core i5 13th Gen - (16 GB/512 GB SSD/Windows 11 Home)",
  },
];


export default productsList;