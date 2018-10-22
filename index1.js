fetch('https://galvanize-eats-api.herokuapp.com/menu')
    .then((response) => response.json())
    .then((response) => {

        var ul = document.getElementById('item')

        var tr = document.getElementById('orderedItems')

        //  Populated Menu
        var totalPrice = document.querySelector('.total-price')

        for (var i = 0; i < response.menu.length; i++) {
            ul.innerHTML += `<li data-type ="${response.menu[i].type}"data-name="${response.menu[i].name}"><input type="radio" name = "menu-item" data-type ="${response.menu[i].type}"data-name="${response.menu[i].name}" data-price ="${response.menu[i].price}" >${response.menu[i].name}-${response.menu[i].price}</input></li>`
        }
        ul.addEventListener('click', function (e) {
            console.log(e.target.getAttribute("data-price"))
            itemName = e.target.getAttribute("data-name")
            itemPrice = e.target.getAttribute("data-price")

        })
        let add_btn = document.getElementById('add_btn')
        add_btn.addEventListener('click', function (e) {
            let quantityAdd = parseInt(document.getElementById("quantity").value)
            let newRowItem = document.createElement("div")
            newRowItem.innerHTML = itemName + "-" + quantityAdd;
            tr.appendChild(newRowItem)
            console.log(totalPrice)

            totalPrice.innerHTML = parseFloat(totalPrice.innerHTML) +
                (parseFloat(itemPrice) * parseFloat(quantityAdd))
            console.log()

            console.log(quantityAdd)
            function getItems() {
                for (var i = 0; i < quantityMultiplier.length; i++) {
                    for (var j = 0; j < orderItemBucket.Length; j++) {
                        orderItemBucket.push(orderItemArray)
                        console.log(orderItemArray)
                    }
                }
            }

            let add_btn = document.getElementById('add_btn1')
            add_btn.addEventListener('click', function (e) {

            })
        })



        fetch('https://galvanize-eats-api.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderObject)
        })
            .then(function (responce) {
                console.log(responce)
            })
        console.log(JSON.stringify(orderObject))

    })


































// ul.appendChild.(table)
       //  On click add item
        // for (var i = 0; i < response.menu.li.length; i++)
            // response.menu.li[i].addEventListener('click', function (e)

    //         let li = document.createElement('li')
    //     li.setAttribute("data-type", response.menu[i].type);
    //     li.setAttribute("data-name", response.menu[i].name);
    //     li.setAttribute("data-name", response.menu[i].price);
    //     console.log("help")
    //     document.getElementById("items").addEventListener("click", quantity);
    //     function addQuantity() {
    //         document.getElementById("orderedItems").innerHTML = quantity();
    //         console.log("further")

    //     }
    // })


  // li.element.addEventListner(addQuantity)
        // var z = 0;
        // function buttonClick()
        // document.getElementById('quantity').value = ++i;





// response.menu[i].addEventListner('click', function)
// element.addEventListner(onclick)





// //             var order = document.querySelector("#orderedItems");



// menu.items.appendchild

// var food_menu_lists = document.querySelectorAll(".menu.items li")
// for (var i = 0; i < food_menu_lists.length; i++) {
//     food_menu_lists[i].addEventListener('click', function (e) {

//         if (e.target.classList.active('active')) {
//             this.classList.remove('active')
//             selectItem = null
//         }
//         else {
//             removeClasses()
//             this.classList.add("active")
//             console.log("help")
//             selectItem = e.target
//                     }
//                 })
//             }




