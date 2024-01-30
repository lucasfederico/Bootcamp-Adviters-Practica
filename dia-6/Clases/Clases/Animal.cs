using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Clases
{
    public class Animal
    {

        public int peso { get; set; }
        public bool hambre { get; set; }
        public bool sed { get; set; }
        // CONSTRUCTOR
        public Animal(int peso, bool hambre, bool sed) {

            this.peso = peso;
            this.hambre = hambre;
            this.sed = sed;

        }
        public void comer() { }
    }
}
