const send = document.getElementById("send");



function start() {
  let res_msg = document.createElement('div');
  res_msg.innerHTML = "Hello! How can I help you today?";
  res_msg.setAttribute("class", "left");
  
  document.getElementById('msg_area').appendChild(res_msg);
}
 

document.getElementById('send').addEventListener(
    "click", async (e)=>{
      e.preventDefault();
      var req = document.getElementById("text").value;
      if (req == undefined || req ==""){
          alert('undefined or nothing sent')

      }
      else{
        let res = "";
        await axios
          .get(`http://jsonplaceholder.typicode.com/todos`)
          .then((data) => {
            res = JSON.stringify(data);
          })
          .catch((err) => console.log(err));

        let msg_req = document.createElement("div");
        let msg_res = document.createElement("div");
        let Con1 = document.createElement("div");
        let Con2 = document.createElement("div");

        Con1.setAttribute("class", "msgCon1");
        Con2.setAttribute("class", "msgCon2");

        msg_req.innerHTML = req;
        msg_res.innerHTML = res;
        msg_req.setAttribute("class", "right");
        msg_req.setAttribute("class", "left");

        let message = document.getElementById("msg_area");
        message.appendChild(Con1);
        message.appendChild(Con2);

        Con1.appendChild(msg_req);
        Con2.appendChild(msg_res);
        document.getElementById('text').value=""
      }
  




    });

   
    


   

  

   


//event listeners


// send.addEventListener("click", getApi);
