export class Audio{
    
    constructor (public pista : number,
    public texto:string,
    public track:string,
    public level:number,
    public se: String)

   
    {
        console.log(this.pista); 
        this.Texto(); 
      
    }

    Texto(){
        switch (this.pista) {
            case 1:
             this.texto = 'the game is at midnight';
            
              break;
            case 2:
              this.texto = 'Carlas daughter is really beautiful';
               
              break;
            
              case 3:
                this.texto = 'these suit is very expensive';
                 
                break;
                case 4:
                  this.texto = 'the party start at noon';
                   
                  break;
                  case 5:
                    this.texto = 'I work in the hospital';
                     
                    break;
            default:
              break;
          }      
       }
}