using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Clases
{
    public class Vaca : Animal
    {
        public Vaca(int peso, bool hambre, bool sed) : base(peso, hambre, sed)
        {
            this.peso = peso;
            this.hambre = hambre;
            this.sed = sed;
        }
        public void comer(int cantidadComida)
        {
            this.peso = this.peso + cantidadComida / 3;
            this.sed = true;
            Console.WriteLine($"La vaca comio, su peso es: {this.peso} \n");
            this.tieneHambre();
        }
        public void beber()
        {
            this.sed = false;
            this.peso -= 500;
            Console.WriteLine($"La vaca bebió, su peso es: {this.peso} \n");
            this.tieneHambre();
        }
        public void tieneHambre()
        {
            if (this.peso < 200_000)
            {
                this.hambre = true;
                Console.WriteLine($"La vaca tiene hambre \n");
            }
            else
            {
                Console.WriteLine($"La vaca no tiene hambre \n");
            }
        }
        public void caminar()
        {
            this.peso -= 3000;
            Console.WriteLine($"La vaca caminó, su peso es: {this.peso} \n");
            this.tieneHambre();
        }
    }
}
