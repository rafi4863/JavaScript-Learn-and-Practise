
// the rules of javascript object

var rafi_1 = {
    fullname : "Md Al-Rafi",
    age : 22,
    address : "Naogoan, Rajshahi",
    email : "mdrafi2626r@gmail.com",
    contact : "01787215170",
    height : 5.5,
    relationship : "married",
    Roll : 734389
};

console.log(rafi_1.email);



// objects in object

var rafi_2 = {
    fullname : "Md Al-Rafi",
    age : 22,
    address : "Naogoan, Rajshahi",
    email : "mdrafi2626r@gmail.com",
    institute : {
        instituteName : "Bogura Polytechnic Institute.",
        Roll : 734389,
        Registation : 1502261564
    },
    contact : "01787215170",
    height : 5.5,
    relationship : "married",
    
};

console.log(rafi_2.institute.instituteName);



// key and value push in rafi of outside


var rafi_3 = {
    fullname : "Md Al-Rafi",
    age : 22,
    address : "Naogoan, Rajshahi",
    email : "mdrafi2626r@gmail.com",
    institute : {
        instituteName : "Bogura Polytechnic Institute.",
        Roll : 734389,
        Registation : 1502261564
    },
    contact : "01787215170",
    height : 5.5,
    relationship : "married",
    
};

rafi_3.firendsName = ["Rahim", "Rabbi", "Himel", "Rubel", "Sabit", "Noyon"];

rafi_3.institute.location = "Sherpur-road, coloni"

console.log(rafi_3);


// kono akta property ar key value baire thake change korar niyom


var rafi_4 = {
    fullname : "Md Al-Rafi",
    age : 22,
    address : "Naogoan, Rajshahi",
    email : "mdrafi2626r@gmail.com",
    contact : "01787215170",
    height : 5.5,
    relationship : "married",
    Roll : 734389
};

rafi_4.contact = "01822024863"; 

console.log(rafi_4);


// kono akta object ar modddho kono property and key value ke delete korar system


var rafi_5 = {
    fullname : "Md Al-Rafi",
    age : 22,
    address : "Naogoan, Rajshahi",
    email : "mdrafi2626r@gmail.com",
    contact : "01787215170",
    height : 5.5,
    relationship : "married",
    Roll : 734389
};

delete rafi_5.height;

console.log(rafi_5);

// height property and key value ta delete hoye gese


// jodi ime chai kono Object ke / kono object ar property and key value k change jano korte na pare tahole sei system ta holo :



var rafi_6 = {
    fullname : "Md Al-Rafi",
    age : 22,
    address : "Naogoan, Rajshahi",
    email : "mdrafi2626r@gmail.com",
    contact : "01787215170",
    height : 5.5,
    relationship : "married",
    Roll : 734389
};

Object.freeze(rafi_6);

rafi_6.fullname = "Shakib Khan";
rafi_6.age = 25;



console.log(rafi_6);

// fullname and age change hobe na


// kono specific property and key value ke freeze korte chaile :


var rafi_7 = {
    fullname : "Md Al-Rafi",
    age : 22,
    address : "Naogoan, Rajshahi",
    email : "mdrafi2626r@gmail.com",
    contact : "01787215170",
    height : 5.5,
    relationship : "married",
    Roll : 734389
};

Object.freeze(rafi_7);

rafi_7.address = "Mirpur, Dhaka";

console.log(rafi_7.address);






