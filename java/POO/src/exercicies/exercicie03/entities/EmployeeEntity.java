package exercicies.exercicie03.entities;

public class EmployeeEntity {
    public String name;
    public double grossSalary;
    public double tax;

    public double NetSalary() {
        return grossSalary = grossSalary - tax;
    }
    public void IncreaseSalary(double percentage) {
        grossSalary = grossSalary + (grossSalary * (percentage / 100));
    }

    public String toString() {
        return "Name: "
                + name
                + System.lineSeparator()
                + "Gross salary: "
                + String.format("%.2f", grossSalary)
                + System.lineSeparator()
                + "tax "
                + tax
                + System.lineSeparator()
                + "Employer: "
                + name
                + ", "
                + "$"
                + grossSalary;
    }
}
