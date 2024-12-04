PASSWORD = "SenhaMaiuscuLO";
inputPassword = str("");

print("\nSimulação de Login\n");

inputPassword = input("Senha: ");

if ( inputPassword.lower() == PASSWORD.lower() ):
    print("Logged In");
else:
    print("Not authorized");
