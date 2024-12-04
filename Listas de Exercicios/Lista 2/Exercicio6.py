gender = str("");
heigth = float(0);
weigth = float(0);
imc = float(0);

print("Cálculo do IMC.\n");

# Inputs
print("F ou M");
gender = input("Sexo: ");
# Verificar se digitou valores dentro do padrão estabelecido
if ( gender.lower() != "f" and gender.lower() != "m" ):
    print("Sexo inválido.");
    exit(0);

heigth = float(input("Altura: "));
weigth = float(input("Peso: "));


imc = weigth / (heigth ** 2);

print(f"\nIMC: {imc:.2f}\n");

if ( gender.lower() == 'm' ):
    # Verificação dos valores do imc
    if ( imc < 18.5 ):
        print("Abaixo do peso.");
    if ( imc >= 18.5 and imc < 25 ):
        print("Peso normal.");
    if ( imc >= 25 and imc < 30 ):
        print("Acima do peso.");
    if ( imc >= 30 ):
        print("Obesidade");

if ( gender.lower() == 'f' ):
    # Verificação dos valores do imc
    if ( imc < 17 ):
        print("Abaixo do peso.");
    if ( imc >= 17 and imc < 23 ):
        print("Peso normal.");
    if ( imc >= 23 and imc < 27 ):
        print("Acima do peso.");
    if ( imc >= 27 ):
        print("Obesidade");