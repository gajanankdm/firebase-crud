const cl = console.log;

const titleControl = document.getElementById("title");
const bodyControl = document.getElementById("body");
const userIdControl = document.getElementById("userId");
const postForm = document.getElementById("postForm");
const postContainer = document.getElementById("postContainer");
const submitBtn = document.getElementById("submitBtn");
const updateBtn = document.getElementById("updateBtn");

let baseurl = "https://crud-post-648e9-default-rtdb.asia-southeast1.firebasedatabase.app/"

let posturl = `${baseurl}/posts.json`;

const objToArr =(newobj)=>{
    let postArr =[];
    for (const key in newobj) {
        let obj = newobj[key]
        obj.id = key;
        postArr.push(obj)
       
    }
    return postArr;
}

const templetingcards = (arr) =>{
    postContainer.innerHTML=``
    arr.forEach(post => {
        let card = document.createElement("div");
        card.className = "card md-4";
        card.id = post.id;
        card.innerHTML =` <div class="card-header">
                          <h2 class="m-0">${post.title}</h2></div>
                            <div class="card-body">
                        <p class="m-0"> ${post.body}</p>
                        </div>
                         <div class="card-footer d-flex justify-content-between">
                        <button class="btn btn-primary">Edit</button>
                         <button class="btn btn-danger">Delete</button>
                        </div>`
        postContainer.append(card)
        
    });
}
fetch(posturl)
.then(res =>{
    //cl(res)
     return res.json();
})
.then(data =>{
    cl(data)//callback >> object to array >> templeting
    let postArr = objToArr(data)
    templetingcards(postArr)
})
.catch( err =>{
    cl(err)
})
const onpostcreate = (eve)=>{

    eve.predefault();
    let newpost = {
        title : titleControl.Value,
        body : bodyControl.Value,
        userId : userIdControl.Value
    }
    cl(newpost)
}





postForm.addEventListener("submit",onpostcreate)