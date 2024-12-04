a = int(0);
b = int(0);
c = int(0);

print("\nExibição decrescente dos valores\n");

a = int(input("Digite: "));
b = int(input("Digite: "));
c = int(input("Digite: "));

if ( a > b and a > c ):
    print(a); # Maior número
    if ( b > c ):
        print(b); # Meio
        print(c); # Menor
    else:
        print(c); # Meio
        print(b); # Menor

if ( b > a and b > c ):
    print(b);
    if ( a > c ):
        print(a);
        print(c);
    else:
        print(c);
        print(a);

if ( c > a and c > b ):
    print(c);
    if ( a > b ):
        print(a);
        print(b);
    else:
        print(b);
        print(a);

if ( a == b == c ):
    print(a);
    print(b);
    print(c);

 
