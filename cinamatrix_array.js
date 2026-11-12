/**
 * ==============================================
 * DU AN: CINEMATRIX - HE THONG DAT VE RAP CHIEU PHIM
 * ==============================================
 *
 * 0: Ghe trong
 * 1: Ghe da duoc dat
 *
 * ticketPrices:
 * Index 0: Normal
 * Index 1: VIP
 * Index 2: Couple
 */

// ==============================================
// PHAN 1: KHAI BAO DU LIEU
// ==============================================

// Mang 1 chieu: Bang gia ve
let ticketPrices = [50000, 90000, 120000];

// Mang 2 chieu: So do ghe 5 hang x 5 cot
let seatMap = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

// Ten cac loai ve
let ticketTypes = ["Normal", "VIP", "Couple"];

// Tong doanh thu
let totalRevenue = 0;

// ==============================================
// PHAN 2: HAM DAT VE
// ==============================================

function bookSeat(row, col, ticketTypeIndex) {
  // Kiem tra hang va cot co phai so nguyen khong
  if (!Number.isInteger(row) || !Number.isInteger(col)) {
    return "Loi: Hang va cot phai la so nguyen!";
  }

  // Kiem tra vi tri ghe co hop le khong
  if (
    row < 0 ||
    row >= seatMap.length ||
    col < 0 ||
    col >= seatMap[row].length
  ) {
    return "Loi: Vi tri ghe khong ton tai!";
  }

  // Kiem tra loai ve
  if (
    !Number.isInteger(ticketTypeIndex) ||
    ticketTypeIndex < 0 ||
    ticketTypeIndex >= ticketPrices.length
  ) {
    return "Loi: Loai ve khong hop le!";
  }

  // Kiem tra ghe da duoc dat chua
  if (seatMap[row][col] === 1) {
    return "That bai: Ghe nay da co nguoi dat!";
  }

  // Cap nhat trang thai ghe
  seatMap[row][col] = 1;

  // Lay gia ve tu mang 1 chieu
  let price = ticketPrices[ticketTypeIndex];

  // Cong doanh thu
  totalRevenue += price;

  // Thong bao dat ve thanh cong
  return (
    "Dat ve thanh cong! Hang: " +
    row +
    ", Cot: " +
    col +
    ", Loai ve: " +
    ticketTypes[ticketTypeIndex] +
    ", Gia ve: " +
    price.toLocaleString("vi-VN") +
    " VND"
  );
}

// ==============================================
// PHAN 3: HAM IN SO DO GHE
// ==============================================

function displaySeatMap() {
  console.log("\n========== SO DO GHE CINEMATRIX ==========");

  // Vong lap ngoai: Duyet tung hang
  for (let row = 0; row < seatMap.length; row++) {
    let line = "";

    // Vong lap trong: Duyet tung cot
    for (let col = 0; col < seatMap[row].length; col++) {
      line += seatMap[row][col] + " ";
    }

    console.log("Hang " + row + ": " + line);
  }

  console.log("==========================================");
  console.log("0: Ghe trong | 1: Ghe da dat");
}

// ==============================================
// PHAN 4: HAM THONG KE GHE
// ==============================================

function countSeats() {
  let emptySeats = 0;
  let bookedSeats = 0;

  for (let row = 0; row < seatMap.length; row++) {
    for (let col = 0; col < seatMap[row].length; col++) {
      if (seatMap[row][col] === 0) {
        emptySeats++;
      } else if (seatMap[row][col] === 1) {
        bookedSeats++;
      }
    }
  }

  console.log("\n========== THONG KE GHE ==========");
  console.log("Tong so ghe:", emptySeats + bookedSeats);
  console.log("Ghe trong:", emptySeats);
  console.log("Ghe da dat:", bookedSeats);
}

// ==============================================
// PHAN 5: HAM HIEN THI DOANH THU
// ==============================================

function displayRevenue() {
  console.log("\n========== DOANH THU ==========");
  console.log("Tong doanh thu:", totalRevenue.toLocaleString("vi-VN"), "VND");
}

// ==============================================
// PHAN 6: KIEM THU CHUONG TRINH
// ==============================================

console.log("\n******** BAT DAU KIEM THU ********");

// Test 1: Dat ghe trong thanh cong
console.log("\nTest 1:");
console.log(bookSeat(0, 0, 0));

// Test 2: Dat lai ghe da co nguoi dat
console.log("\nTest 2:");
console.log(bookSeat(0, 0, 1));

// Test 3: Dat ghe co loai ve VIP
console.log("\nTest 3:");
console.log(bookSeat(0, 2, 1));

// Test 4: Hang am
console.log("\nTest 4:");
console.log(bookSeat(-1, 0, 0));

// Test 5: Cot vuot qua gioi han
console.log("\nTest 5:");
console.log(bookSeat(0, 99, 0));

// Test 6: Hang vuot qua gioi han
console.log("\nTest 6:");
console.log(bookSeat(10, 0, 0));

// Test 7: Loai ve khong hop le
console.log("\nTest 7:");
console.log(bookSeat(4, 4, 5));

// Test 8: Vi tri khong phai so nguyen
console.log("\nTest 8:");
console.log(bookSeat(1.5, 2, 0));

// Test 9: Dat ghe Couple
console.log("\nTest 9:");
console.log(bookSeat(4, 4, 2));

// ==============================================
// PHAN 7: HIEN THI KET QUA CUOI CUNG
// ==============================================

console.log("\n******** KET QUA CUOI CUNG ********");

displaySeatMap();

countSeats();

displayRevenue();

console.log("\n******** KET THUC CHUONG TRINH ********");
