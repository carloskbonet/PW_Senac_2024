import Temperaturas;
import os;

menuInput = int(0);
valueInput = float(0);
result = float(0);


while (True):
    print("Digite 1 para converter °C para °F");
    print("Digite 2 para converter °C para °K");
    print("Digite 3 para converter °F para °K");

    menuInput = int(input("Digite: "));

    if ( menuInput == 1 ):
        print('Conversão de Celsius para Fahrenheit.\n');

        valueInput = float(input("Celsius: "));
        result = Temperaturas.CelsiusToFahrenheit(valueInput);
        print(f'\n{valueInput}°C equivalem a {result}°F');

    if ( menuInput == 2 ):
        print('Conversão de Celsius para Kelvin.\n');

        valueInput = float(input("Celsius: "));
        result = Temperaturas.CelsiusToKelvin(valueInput);
        print(f'\n{valueInput}°C equivalem a {result}°K');

    if ( menuInput == 3 ):
        print('Conversão de Fahrenheit para Kelvin.\n');

        valueInput = float(input("Fahrenheit: "));
        result = Temperaturas.FahrenheitToKelvin(valueInput);
        print(f'\n{valueInput}°F equivalem a {result}°K');

    input("\nAperte ENTER para continuar.");

    os.system("cls");
    

