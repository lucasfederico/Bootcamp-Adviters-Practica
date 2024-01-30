using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Clases
{
    public class Test
    {
        public static void Main()
        {
            // Crear una instancia de la clase Vaca
            Vaca lola = new Vaca (199_000, false, false);

            lola.caminar();
            lola.beber();
            lola.comer(20_000);

            // INSTANCIA CERDO
            Cerdo porky = new Cerdo(199_000, false, false);

            porky.comer(20_000);
            porky.comer(60_000);
            porky.comer(20_000);
            porky.comer(20_000);
            porky.saberCuantoComio();

            Console.ReadKey();
        }
    }
}