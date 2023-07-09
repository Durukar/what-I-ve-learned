package exercicies.exercicieModulo09.application;

import exercicies.exercicieModulo09.entities.Account;

import java.util.Locale;
import java.util.Scanner;


public class BankApp {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        // account number
        System.out.print("Enter account number: ");
        int accountNumber = sc.nextInt();
        sc.nextLine(); // Gambira da porra

        // account holder
        System.out.print("Enter account holder: ");
        String accountName = sc.nextLine();

        // Account creation
        Account account = new Account(accountNumber, accountName);

        // First deposit question
        System.out.print("Is there na initial deposit (y/n)? ");
        String reponse = sc.next();
        account.firstDeposit(reponse.toLowerCase());

        // account print
        System.out.println(account);
        System.out.println(" ");

        // Deposit value
        System.out.print("Enter a deposit value: ");
        double value = sc.nextDouble();
        account.depositBalance(value);
        System.out.println(account);

        // account Withdraw
        System.out.println(" ");
        System.out.print("Enter a withdraw value: ");
        value = sc.nextDouble();
        account.withdrawBalance(value);
        System.out.println(account);
    }
}
