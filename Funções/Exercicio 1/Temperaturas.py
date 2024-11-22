
def CelsiusToFahrenheit(celsius:float) -> float:
    result = float(0);

    result = ( celsius * 1.8 ) + 32;

    return result;

def CelsiusToKelvin(celsius:float):
    result = float(0);

    result = celsius + 273.15;

    return result;


def FahrenheitToKelvin(fahrenheit:float):
    result = float(0);

    result = ( fahrenheit / 1.8 ) + 241.15;

    return result;