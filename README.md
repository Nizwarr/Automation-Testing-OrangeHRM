# OrangeHRM Test Automation with Cypress

Proyek ini adalah otomasi pengujian untuk fitur **Login** dan **Forgot Password** pada aplikasi OrangeHRM menggunakan **Cypress Framework**. Pengujian ini mencakup skenario positif dan negatif untuk memastikan keamanan dan fungsionalitas sistem.

## 📋 Requirement
Sebelum menjalankan pengujian, pastikan Anda telah menginstal:
* [Node.js](https://nodejs.org/) (Versi terbaru direkomendasikan)
* [Cypress](https://www.cypress.io/)

## 🧪 Skenario Pengujian (Test Cases)
Berikut adalah daftar skenario yang diuji dalam proyek ini:
ID,Judul Test Case,Tipe,Action Utama,Assertion Utama
TC-01,Login Valid,Positive,".type(), .click()",URL include /dashboard
TC-02,Login Password Salah,Negative,".type(), .click()","Msg: ""Invalid credentials"""
TC-03,Login Username Salah,Negative,".type(), .click()","Msg: ""Invalid credentials"""
TC-04,Username Kosong,Negative,.click(),"Msg: ""Required"""
TC-05,Password Kosong,Negative,".type(), .click()","Msg: ""Required"""
TC-06,Kedua Field Kosong,Negative,.click(),"Dual Msg: ""Required"""
