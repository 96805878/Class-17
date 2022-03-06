
class Eraser{

constructor(x, y,w,h){
    this.shape="rectangle"
    this.colour="white"
    this.width=w
    this.height=h
    this.xaxis=x
    this.yaxis=y
    this.manufacturer="Faber-Castell"

}

    display(){
        fill(this.colour);
        rect(this.xaxis,this.yaxis,this.width,this.height);

        


    }

        
    


}









