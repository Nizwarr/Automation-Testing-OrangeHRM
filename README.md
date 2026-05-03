# OrangeHRM Test Automation with Cypress

Proyek ini adalah otomasi pengujian untuk fitur **Login** dan **Forgot Password** pada aplikasi OrangeHRM menggunakan **Cypress Framework**. Pengujian ini mencakup skenario positif dan negatif untuk memastikan keamanan dan fungsionalitas sistem.

## 📋 Requirement
Sebelum menjalankan pengujian, pastikan Anda telah menginstal:
* [Node.js](https://nodejs.org/) (Versi terbaru direkomendasikan)
* [Cypress](https://www.cypress.io/)

### 🧪 Skenario Pengujian (Test Cases)

| ID | Judul Test Case | Skenario | Action Utama (Interaksi) | Assertion Utama (Ekspektasi) |
| :-- | :--- | :--- | :--- | :--- |
| **TC-01** | **Login Valid** | Login menggunakan kredensial yang terdaftar. | `.type()`, `.click()` | URL mengandung `/dashboard` |
| **TC-02** | **Invalid Password** | Login dengan password yang salah. | `.type()`, `.click()` | Alert berisi "Invalid credentials" |
| **TC-03** | **Invalid Username** | Login dengan username yang tidak terdaftar. | `.type()`, `.click()` | Alert berisi "Invalid credentials" |
| **TC-04** | **Empty Username** | Mengosongkan field username saat login. | `.click()` | Pesan error "Required" muncul |
| **TC-05** | **Empty Password** | Mengosongkan field password saat login. | `.type()`, `.click()` | Pesan error "Required" muncul |
| **TC-06** | **Empty Fields** | Mengosongkan kedua field (User & Pass). | `.click()` | Dua pesan "Required" ditampilkan |
