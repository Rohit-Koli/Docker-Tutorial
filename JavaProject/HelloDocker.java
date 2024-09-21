import java.util.Properties;

public class HelloDocker{

    public static void systemProperties(){
        Properties prop=System.getProperties();
        System.out.println("System Properties are :");
        System.out.println(prop);
    }
    public static void main(String[] args) {
        System.out.println("Hello from Rohit to Docker !");
        systemProperties();
    }
}