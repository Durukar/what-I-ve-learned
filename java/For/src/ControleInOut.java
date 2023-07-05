import java.util.Scanner;

public class ControleInOut {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int numeroDeRepeticoes, in, out;

        numeroDeRepeticoes = sc.nextInt();

        in = 0;
        out = 0;

        for(int i=0; i<numeroDeRepeticoes; i++){
            int numeroAvaliar = sc.nextInt();
            if(numeroAvaliar >=10 && numeroAvaliar <= 20) {
                in++;
            } else{
                out++;
            }
        }

        System.out.println(in + " in");
        sc.close();
    }
}
