class Snake{
  constructor(){
    this.body=[];
    this.body[0]=createVector(floor(w/2),floor(h/3));
    this.xdir=0 ;
    this.ydir=0;
    //this.len=0;
  }

  update(){

    let head=this.body[this.body.length-1].copy();
      this.body.shift();
    if (head.x > 20) {
  head.x = 0;
} else if (head.x < 0) {
  head.x = 20;
}
 if (head.y >20) {
  head.y = 0;
} else if (head.y < 0) {
  head.y = 20;
}
//  else{
    head.x+=this.xdir;
    head.y+=this.ydir;
  //}
    this.body.push(head);
    print(head.x,head.y,this.body.length);

    //this.body[0].x+=this.xdir;
    //this.body[0].y+=this.ydir;
}
  grow()
  {
    let head=this.body[this.body.length-1].copy();
  //  this.len++;
    this.body.push(head);
    //this.score++;
  //  return score;
  }
  show(){
    for(let i=0;i<this.body.length;i++){
    fill(0);
    fill(random(0,255),random(0,255),random(0,255));
    rect(this.body[i].x,this.body[i].y,1,1);

  }
  }
  eat(pos){
    	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
  if(pos.x==x&&pos.y==y){
       print("eaten");
    this.grow();
    return true;
  }
    return false;
  }
  endGame(){
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    /*if(x>w-1||x<0||y>h-1||y<0){
       return true;
     }*/
  //   if(x>w-1)
    // this.xdir=1;
  for(let i=0;i<this.body.length-1;i++){
  let part=this.body[i];
    if(part.x==x&&part.y==y){ return true;print("AAA");}
  }
    return false;
  }

  setDir(x,y){
    this.xdir=x;
    this.ydir=y;

  }
}
