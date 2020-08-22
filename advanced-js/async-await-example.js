
var order =()=>{
    return new Promise((resolve, reject)=>{
        let order_id = 10;
        console.log("Order "+order_id+" Placed by user");
        resolve(order_id);
    });
}

var process_order = (order_id)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Order: "+order_id+" processed!");
            resolve(order_id);
        }, 5000);
    });    
}

var delivery = (order_id)=>{
    return new Promise((resolve, reject)=>{
        resolve("parcel delivered for Order: "+order_id);
    });
} 

// order().then((order_id)=>{
//     process_order(order_id).then((response_from_process_order)=>{
//         delivery(response_from_process_order).then((response_from_delivery)=>{
//             console.log(response_from_delivery);
//         });
//     });
// });

var order_management = async()=>{

    let order_id = await order();
    let processed_order = await process_order(order_id);
    let delivery_report = await delivery(processed_order);

    console.log(delivery_report);

}//End of order management function

order_management();




