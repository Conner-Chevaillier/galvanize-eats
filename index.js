
// //Grabing items from cloud//
// var getURL = "https://galvanize-eats-api.herokuapp.com/menu";
// fetch(getURL)
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (body) {
//         //Calling Varibles//
//         var form_name = document.querySelector('.form #name');
//         var form_phone = document.querySelector('.form #phone');
//         var form_address = document.querySelector('.form #address');
//         var deliver_btn = document.querySelector('.form #deliver-btn');
//         var boxTotal = document.querySelector('.box #total');
//         var orders = document.querySelector('#orders')
//         var selectItem = document.querySelector('.item #item');
//         var quantity = document.querySelector('.quantity #quantity')
//         var orders = document.querySelector('#orders');
//         var add_btn = document.querySelector('#add-btn');
//         // Order 
//         if (orders !== null) {
//             function enableDisableAddBtn() {
//                 if (selectItem === null || quantity.value === "" || parseInt(quantity.value) <= 0) {
//                     add_btn.disabled = true;
//                 } else {
//                     add_btn.removeAttribute("disabled");
//                 }
//             }
//             function enableDisableAddBtn() {
//                 if (selectItem === null || quantity.value === "" || parseInt(quantity.value) <= 0) {
//                     add_btn.disabled = true;
//                 } else {
//                     add_btn.removeAttribute("disabled");
//                 }
//             }
//         }
//         function enableDisableDeliverBtn() {
//             if (form.name.value === "" || parseInt(quantity.value) <= 0) {
//                 add_btn.disabled = true;
//             } else {
//                 add_btn.removeAttribute("disabled");
//             }
//         }
//         var ul = document.querySelector(".menu .items")
//         for (var i = 0; i < body.menu.length; i++) {

//             ul.innerHTML += `<li data-type="${body.menu[i].type}"data-name="${body.menu[i].name}">${body.menu[i].name} - ${body.menu[i].price}</li>`

//         }
//         function removeClasses() {
//             for (var i = 0; i < food_menu_lists.length; i++) {
//                 food_menu_lists[i].classList.remove('active')
//             }
//         }
//         var food_menu_lists = document.querySelectorAll(".menu .items li")
//         for (var i = 0; i < food_menu_lists.length; i++) {
//             food_menu_lists[i].addEventListener('click', function (e) {

//                 if (e.target.classList.contains('active')) {
//                     this.classList.remove('active')
//                     selectItem = null
//                 }
//                 else {
//                     removeClasses()
//                     this.classList.add('active')
//                     console.log("help")
//                     selectItem = e.target

//                 }
//                 enableDisableAddBtn()
//             })
//         }
//         var total_price = document.querySelector('.checkout-lists .total .total-price');
//         var add_btn = document.querySelector('#add_btn')
//         quantity.addEventListener('change', enableDisableAddBtn)
//         quantity.addEventListener('keyup', enableDisableAddBtn)
//         add_btn.addEventListener('click', function (e) {
//             e.preventDefault()

//             // get quantity from input
//             console.log(document.getElementById(quantity).innerHtml)
//             // select quantity input
//             e.target.value
//             // grab value from quantity input
//             // select grant total box
//             // create a new p element to append
//             // add value to p element
//             // selectItem name
//             // quanity
//             // selectItem price times quantity
//             // append p element to grant total box
//             // create global variable with grand price total
//             // add item price times quanity value to global variable
//             // create/select price total box
//             // add price total global variable to innerText of price total box
//         })
//     })

// form_name.addEventListener('change', enableDisableAddBtn)
// form_phone.addEventListener('change', enableDisableDeliverBtn)
// form_address.addEventListener('change', enableDisableDeliverBtn)
// form_name.addEventListener('keyup', enableDisableDeliverBtn)
// form_phone.addEventlistener('keyup', enableDisableDeliverBtn)
// form_address.addEventlistener('keyup', enableDisableDeliverBtn)

// deliver_btn.addEventlister('click', function (e) {
//     e.preventDefault()
//     var data = {
//         totalPrice: total_price.innerHTML
//     }
//     var setting = {
//         method: "POST",
//         header: {
//             "Content-Type": "text/plain; charset=UTF-8"
//         },
//         body: JSON.stringify(data)
//     }
//     fetch('https://galvanize-eats-api.herokuapp.com/orders', setting)
//         .then(function (response) {
//             var data = response.text()
//             return data
//         })
//         .then(function (data) {
//             var status = document.querySelector('.status');
//             status.innerHTML = data
//             status.style.opacity = 1
//             setTimeout(function () {
//                 status.style.opacity = 0
//             }, 2000)
//             return data
//         })
//         .catch(function (error) {
//             console.error(error)
//         })

// })