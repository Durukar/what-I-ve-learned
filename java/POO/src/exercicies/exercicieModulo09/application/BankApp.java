package exercicies.exercicieModulo09.application;

import exercicies.exercicieModulo09.entities.Account;

import java.util.Locale;
import java.util.Scanner;


public class BankApp {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter account number: ");
        int accountNumber = sc.nextInt();
        sc.nextLine(); // Gambira da porra
        System.out.print("Enter account holder: ");
        String accountName = sc.nextLine();
        Account account = new Account(accountNumber, accountName);
        System.out.print("Is there na initial deposit (y/n)? ");
        String reponse = sc.next();
        account.firstDeposit(reponse.toLowerCase());
        System.out.println(account);
    }
}
