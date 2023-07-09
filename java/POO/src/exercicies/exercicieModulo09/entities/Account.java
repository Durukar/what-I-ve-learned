package exercicies.exercicieModulo09.entities;

import java.util.Scanner;

public class Account {
    Scanner sc = new Scanner(System.in);
    private int accountNumber;
    private String accountName;
    private double accountBalance;

    public Account(int accountNumber, String accountName) {
        this.accountNumber = accountNumber;
        this.accountName = accountName;
    }

    public int getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getAccountName() {
        return accountName;
    }

    public void withdrawBalance(double value) {
        
    }

    public void setAccountBalance(double accountBalance) {
        this.accountBalance = accountBalance;
    }

    public void firstDeposit(String response){
        if (response.equals("y")){
            System.out.print("Enter initial deposit value: ");
            double initialDeposit = sc.nextDouble();
            accountBalance = initialDeposit;
        } else {
            accountBalance = 0;
        }
    }

    public String toString(){
        return "Account data: "
                + System.lineSeparator()
                + "Account"
                + accountNumber
                + ", "
                + accountName
                + ", "
                + "Balance: $ "
                + String.format("%.2f", accountBalance);
    }
}
