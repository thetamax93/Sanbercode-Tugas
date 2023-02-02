//Response API:

let productBin = {
  "requestId": null,
  "data": [
    {
      "id": 100000057465,
      "storageId": 10000008207,
      "code": "A01-01-01-A",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 76,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000057466,
      "storageId": 10000002181,
      "code": "A01-01-01-B",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 71,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000065224,
      "storageId": 10000008884,
      "code": "Tgt00-A-A-01",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 10,
      "createdTime": "2022-02-08T10:35:19Z",
    }
  ],
  "message": "success"
}

//Function:

//Nama produk dan kode:
console.log("Nama Produk: " + productBin.data[0].productName);
console.log("Kode Produk: " + productBin.data[0].productCode);

//Mencetak Storage Id dan Kuantitas di Storage tersebut:  
var data = []
for(let counter = 0; counter < 3; counter++){
   console.log('Cetak Storage Id ke - ' + counter + ": " + productBin.data[counter].storageId)
   console.log('Cetak Kuantitas Produk Storage Id ke - ' + counter + ": " + productBin.data[counter].quantity)
}

//Menghitung total kuantitas di semua Storage:
function total(a,b,c){
  jumlahkuantitas = a + b + c;
  return jumlahkuantitas;
}
var kuantitas1 = productBin.data[counter = 0].quantity;
var kuantitas2 = productBin.data[counter = 1].quantity;
var kuantitas3 = productBin.data[counter = 2].quantity;
var totalkuantitas = total(kuantitas1, kuantitas2, kuantitas3);
console.log("Total Kuantitas di semua Storage: " + jumlahkuantitas);






  