# ITSC Shop Project

โปรเจคนี้เราจะมาทำเว็บขายของง่าย ๆ กัน

# สิ่งที่ต้องทำ

## 1. หน้า Home Page

- ทำหน้า Home ที่โชว์รายการสินค้า และมีปุ่ม **View More** ที่สามารถกดไปดูรายละเอียดที่หน้า **Detail** ได้
- สามารถดึงข้อมูลได้จาก endpoint ด้านล่างนี้

```http
GET https://e-commerce-workshop-api.vercel.app/api/products
```

<p align="center"><img src="https://github.com/runyasak/itsc-shop-project-starter/blob/main/docs/home-page.png" /></p>

## 2. หน้า Detail Page

- ทำหน้าหน้ารายละเอียดสินค้าที่แสดงรูปสินค้า `image`, ชื่อสินค้า `title`, รายละเอียด `description` และราคา `price`
- สามารถดึงรายละเอียดสินค้าได้จาก endpoint ด้านล่างนี้

```http
GET https://e-commerce-workshop-api.vercel.app/api/products/:id
```

- สร้างปุ่มปุ่ม **Buy Now** ที่เมื่อกดแล้วจะไปหน้า **Checkout**

<p align="center"><img src="https://github.com/runyasak/itsc-shop-project-starter/blob/main/docs/checkout-page.png" /></p>

## 3. หน้า Checkout Page

- ทำหน้า **Checkout** ที่โชว์รายละเอียดสินค้าที่เรากำลังจะซื้อ
  (สามารถใช้ endpoint เดียวกับหน้า Detail ในการดึงรายละเอียดสินค้า)
- สร้าง form ที่ต้องส่งให้กับ API โดย body ที่ส่งดูได้จากด้านล่างนี้

```javascript
{
  firstname: "John",
  lastname: "Doe",
  productId: 1,
  quantity: 1,
  address: "295-297 New Road Promppong, Chatuchak, Bangkok"
}
```

- สร้างปุ่ม **Submit** ที่นำ form ส่งให้กับ endpoint นี้

```http
POST https://e-commerce-workshop-api.vercel.app/api/checkout
Content-Type: application/json

{
  "firstname": string,
  "lastname": string,
  "productId": number,
  "quantity": number,
  "address": string
}
```

- เมื่อส่งข้อมูลครบหรือ success จะต้อง redirect ไปที่หน้า **Checkout Success** หากได้ error จะต้องไปสามารถไม่สามารถไปหน้า **Checkout Success** ได้

## 4. หน้า Checkout Success Page

- ทำหน้า **Checkout Success** โดยจะต้องมาหน้านี้หลังจากที่ checkout สำเร็จแล้ว

<p align="center"><img src="https://github.com/runyasak/itsc-shop-project-starter/blob/main/docs/success-page.png" /></p>

# ⭐️ Bonus

- จัดแต่ละหน้าให้สวยงาม สามารถใช้ Daisyui, Vuetify หรือ Library ตามถนัดได้
- ที่หน้า **Checkout** มีแจ้งเตือนเมื่อกรอกข้อมูลไม่ครบ
- ทำ Loading Spinner ระหว่างที่รอข้อมูล (**HINT:** https://tailwind-elements.com/docs/standard/components/spinners/)
- ทำ i18n
