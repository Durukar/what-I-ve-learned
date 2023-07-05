public class ContadorImpar {
    public static void main(String[] args) {
         int x;

         x = 8;

         for (int i=0; i<x; i++) {
             if(i % 2 != 0) {
                 System.out.println(i);
             }
         }
    }
}
