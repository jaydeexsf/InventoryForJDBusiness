   // Sample inventory data (you should replace this with your data storage method)
   let inventory = [];

   // Function to add a new item to the inventory
   function addItem(itemName, quantity, reorderLevel) {
     const newItem = {
       itemName: itemName,
       quantity: quantity,
       reorderLevel: reorderLevel,
     };
     inventory.push(newItem);
   }

   // Function to display the inventory on the webpage
   function displayInventory() {
     const inventoryList = document.getElementById("inventoryList");
     inventoryList.innerHTML = ' '
     inventory.forEach((item, index) => {
       const listItem = document.createElement("li");
       listItem.innerHTML = `
         ${item.itemName} (Quantity: ${item.quantity}, Reorder Level: ${item.reorderLevel})
         <button onclick="editItem(${index})">Edit</button>
         <button onclick="deleteItem(${index})">Delete</button>
       `;
       inventoryList.appendChild(listItem);
     });
   }

   // Function to edit an existing item in the inventory
   function editItem(index) {
     const updatedItemName = prompt("Enter the updated item name:");
     const updatedQuantity = parseInt(prompt("Enter the updated quantity:"));
     const updatedReorderLevel = parseInt(prompt("Enter the updated reorder level:"));

     if (
       updatedItemName !== null &&
       !isNaN(updatedQuantity) &&
       !isNaN(updatedReorderLevel)
     ) {
       inventory[index].itemName = updatedItemName;
       inventory[index].quantity = updatedQuantity;
       inventory[index].reorderLevel = updatedReorderLevel;
       displayInventory();
     }
   }

   // Function to delete an item from the inventory
   function deleteItem(index) {
     inventory.splice(index, 1);
     displayInventory();
   }

   // Event listener for the form submission to add a new item
   document.getElementById("inventoryForm").addEventListener("submit", function (e) {
     e.preventDefault();
     const itemName = document.getElementById("itemName").value;
     const quantity = parseInt(document.getElementById("quantity").value);
     const reorderLevel = parseInt(document.getElementById("reorderLevel").value);

     if (!isNaN(quantity) && !isNaN(reorderLevel)) {
       addItem(itemName, quantity, reorderLevel);
       displayInventory();
       document.getElementById("inventoryForm").reset();
     } else {
       alert("Please enter valid quantity and reorder level.");
     }
   });

   // Initial display of inventory
   displayInventory();

if (item.quantity >100) {
 item.quantity = 100+'+'
}