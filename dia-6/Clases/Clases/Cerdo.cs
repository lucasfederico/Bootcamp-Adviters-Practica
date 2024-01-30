using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Clases
{
    public class Cerdo : Animal
    {
        int vecesComio = 0;
        int cuantoComio = 0;
        public Cerdo(int peso, bool hambre, bool sed) : base(peso, hambre, sed)
        {
            this.peso = peso;
            this.hambre = hambre;
            this.sed = sed;
        }
        public void comer(int cantidadComida)
        {
            if (cantidadComida > 1000)
            {
                this.peso += cantidadComida - 200;
                this.hambre = false;
                Console.WriteLine($"El cerdo comió, su peso es: {this.peso} \n");
            }
            else if (cantidadComida > 200)
            {
                this.peso += cantidadComida - 200;
                Console.WriteLine($"El cerdo comió, su peso es: {this.peso} \n");
            }
            vecesComio++;
            if (vecesComio > 3)
            {
                this.sed = true;
                Console.WriteLine($"El cerdo comío más de 3 veces seguidas, ahora tiene sed");
            }
            // CUANTO COMIO LA VEZ QUE MAS COMIO
            if (cantidadComida > this.cuantoComio)
            {
                this.cuantoComio = cantidadComida;
            }
        }
        
        public void beber()
        {
            this.sed = false;
            this.hambre = true;
            Console.WriteLine($"El cerdo bebío, ahora tiene hambre \n");
            this.vecesComio = 0;
        }
        public void saberCuantoComio()
        {
            Console.WriteLine($"El cerdo comió {this.cuantoComio}, la vez que más comió \n");
        }
    }
}
