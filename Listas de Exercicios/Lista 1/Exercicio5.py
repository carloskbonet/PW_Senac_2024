# Var
# Input
yOld = int(0);
#Output
days = int(0);
months = int(0);
hours = int(0);
minutes =  int(0);
seconds = int(0);

print("\nConversão de idade\n");

yOld = int(input("Digite sua idade: "));

# Processamento
days = yOld * 365;
months = yOld * 12;
hours = days * 24;
minutes = hours * 60;
seconds = minutes * 60;

print(f'\nAnos : {yOld} / Dias : {days} / Meses : {months}');
print(f'Horas : {hours} / Minutos : {minutes} / Segundos : {seconds}');