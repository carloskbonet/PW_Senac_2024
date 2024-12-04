a = int(0);
b = int(0);
c = int(0);

result = int(0);

print("\nExercício de condições.\n");

a = int(input("a : "));
b = int(input("b : "));
c = int(input("c : "));


result = a + b;


if ( result > c ):
    print(f'A somatória {result} é maior que C ({c})');

if ( result < c ):
    print(f'A somatória {result} é menor que C ({c})');

if ( result == c ):
    print(f'A somatória {result} é igual a C ({c})');