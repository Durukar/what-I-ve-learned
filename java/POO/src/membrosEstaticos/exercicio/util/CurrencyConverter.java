package membrosEstaticos.exercicio.util;

public class CurrencyConverter{
    //public static final double Dolar = dolarValue;

    public static double dolarConverter(double dolarPrice, double dolarBuy){
        return dolarPrice * dolarBuy + (dolarPrice * dolarBuy * 0.06);
    }
}
