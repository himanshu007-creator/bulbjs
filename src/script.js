function test(){
    console.log("script is live!");
}
function work(abc){
    element=abc.src;
    if(element.includes("off")){
		update=element.replace("off","on");
		abc.src = update;
		console.log(abc.src);
    }
    else{
        update=element.replace("on","off");
		abc.src = update;
		console.log(abc.src);
    }
	// old approach
    // source=abc.src;
	// console.log(source);
    // // 21
    // main=source.slice(0,21)
    // state=source.slice(21)
    //   if(state == "/assets/off.png"){
    //     state = "/assets/on.png";
    // }
    // else{
    //     state="/assets/off.png"
    // }
    // updated_state=String(main+state);
    // source=updated_state;
    // abc.src=source;
    // console.log(source)
}
function toggle(){
    {
		bulb_state=document.getElementById("toggle").src;
        if(bulb_state.includes("off")){
			for(let i=1; i<=3;i++){
			source=document.getElementById("bulb"+i);
			source.src=source.src.replace("off","on");
			console.log(source);
			}
            document.getElementById('toggle').src="../assets/switchon.png"
			console.log(i)
        }
        else{
			for(let i=1; i<=3;i++){
            source=document.getElementById("bulb"+i);
			source.src=source.src.replace("on","off");
			}
            document.getElementById('toggle').src="../assets/switchoff.png"
        }
}
}