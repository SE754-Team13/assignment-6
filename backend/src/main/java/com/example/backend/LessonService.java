package com.example.backend;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class LessonService {

    private static final List<Lesson> LESSONS = List.of(

        new Lesson(1, "Classes & Objects", "classes-and-objects", List.of(
            new LessonStep(1, "What is a Class?",
                "A class is a blueprint or template for creating objects. It defines what data an " +
                "object holds and what actions it can perform. Think of a class like an architectural " +
                "blueprint for a house - the blueprint itself isn't a house, but it describes exactly " +
                "how to build one. In Java, you define a class using the class keyword.",
                "public class Dog { }"),

            new LessonStep(2, "What is an Object?",
                "An object is a specific instance of a class - a real \"thing\" built from the blueprint. " +
                "You can create many objects from the same class, just like you can build many houses " +
                "from the same blueprint. Each object has its own copy of the data defined in the class.",
                "Dog myDog = new Dog();"),

            new LessonStep(3, "Fields (Attributes)",
                "Fields store the data that belongs to an object. They are declared inside the class " +
                "and each object gets its own copy of these values. Fields describe the state of an object.\n\n" +
                "Here name and age are fields. A Dog object might have name = \"Rex\" and age = 3.",
                "public class Dog {\n" +
                "    String name;\n" +
                "    int age;\n" +
                "}"),

            new LessonStep(4, "Methods (Behaviours)",
                "Methods define what an object can do. They are functions declared inside a class and " +
                "can read or modify the object's fields. Methods describe the behaviour of an object.\n\n" +
                "Calling myDog.bark() would print Rex says: Woof!",
                "public class Dog {\n" +
                "    String name;\n" +
                "    void bark() {\n" +
                "        System.out.println(name + \" says: Woof!\");\n" +
                "    }\n" +
                "}"),

            new LessonStep(5, "Putting It Together",
                "A class bundles fields and methods together. You create objects from the class using " +
                "new, and each object can use the methods and hold its own field values independently.\n\n" +
                "dog1 and dog2 are separate objects - changing one does not affect the other.",
                "Dog dog1 = new Dog();\n" +
                "dog1.name = \"Rex\";\n" +
                "Dog dog2 = new Dog();\n" +
                "dog2.name = \"Bella\";\n" +
                "dog1.bark(); // Rex says: Woof!\n" +
                "dog2.bark(); // Bella says: Woof!")
        )),

        new Lesson(2, "Inheritance", "inheritance", List.of(
            new LessonStep(1, "What is Inheritance?",
                "Inheritance allows one class (the child or subclass) to take on the fields and methods " +
                "of another class (the parent or superclass). This lets you reuse existing code and build " +
                "on top of it without rewriting everything. In Java, inheritance is done using the extends keyword.",
                "public class Cat extends Animal { }"),

            new LessonStep(2, "The Parent Class",
                "The parent class (also called superclass or base class) contains common fields and " +
                "methods that multiple child classes will share. You write shared behaviour once here " +
                "instead of repeating it in every subclass.\n\n" +
                "Any class that extends Animal automatically gets the name field and eat() method.",
                "public class Animal {\n" +
                "    String name;\n" +
                "    void eat() {\n" +
                "        System.out.println(name + \" is eating.\");\n" +
                "    }\n" +
                "}"),

            new LessonStep(3, "The Child Class",
                "The child class (subclass) extends the parent and inherits all its non-private fields " +
                "and methods. It can also add its own new fields and methods on top of what it inherited.\n\n" +
                "A Cat object can call both eat() (inherited from Animal) and purr() (defined in Cat).",
                "public class Cat extends Animal {\n" +
                "    void purr() {\n" +
                "        System.out.println(name + \" is purring.\");\n" +
                "    }\n" +
                "}"),

            new LessonStep(4, "Overriding Methods",
                "A child class can override a parent method to provide its own specific implementation. " +
                "You use the @Override annotation to signal this clearly. The overridden method replaces " +
                "the parent's version when called on a child object.\n\n" +
                "Now calling eat() on a Cat prints the Cat-specific message instead of the Animal one.",
                "public class Cat extends Animal {\n" +
                "    @Override\n" +
                "    void eat() {\n" +
                "        System.out.println(name + \" is eating fish.\");\n" +
                "    }\n" +
                "}"),

            new LessonStep(5, "The super Keyword",
                "The super keyword lets a child class refer to its parent class. You can use it to call " +
                "the parent's constructor or a parent method that was overridden. This is useful when you " +
                "want to extend the parent's behaviour rather than fully replace it.\n\n" +
                "Output: [name] is eating. followed by ...specifically, tuna.",
                "public class Cat extends Animal {\n" +
                "    @Override\n" +
                "    void eat() {\n" +
                "        super.eat(); // calls Animal's eat()\n" +
                "        System.out.println(\"...specifically, tuna.\");\n" +
                "    }\n" +
                "}")
        )),

        new Lesson(3, "Abstraction", "abstraction", List.of(
            new LessonStep(1, "What is Abstraction?",
                "Abstraction means hiding the complex internal details of how something works and only " +
                "exposing what is necessary. It lets you focus on what an object does rather than how it " +
                "does it. In Java, abstraction is achieved using abstract classes and interfaces.\n\n" +
                "A TV remote is a good analogy - you press a button to change the channel without " +
                "needing to know the electronics inside.",
                null),

            new LessonStep(2, "Abstract Classes",
                "An abstract class is a class that cannot be instantiated directly - you cannot create " +
                "an object from it. It serves as a base for other classes and can contain both abstract " +
                "methods (no body) and regular methods (with a body). You declare an abstract class " +
                "using the abstract keyword.\n\n" +
                "You cannot do new Shape() - you must extend it.",
                "public abstract class Shape {\n" +
                "    abstract double getArea();\n" +
                "    void describe() {\n" +
                "        System.out.println(\"I am a shape.\");\n" +
                "    }\n" +
                "}"),

            new LessonStep(3, "Abstract Methods",
                "An abstract method has no body - it just declares what the method signature looks like. " +
                "Any non-abstract subclass that extends the abstract class must provide its own " +
                "implementation of every abstract method. This enforces a contract: all subclasses must " +
                "support this behaviour, but each can do it differently.\n\n" +
                "Circle must implement getArea() because Shape declared it abstract.",
                "public class Circle extends Shape {\n" +
                "    double radius;\n" +
                "    @Override\n" +
                "    double getArea() {\n" +
                "        return Math.PI * radius * radius;\n" +
                "    }\n" +
                "}"),

            new LessonStep(4, "Why Use Abstraction?",
                "Abstraction reduces complexity and increases reusability. By defining a common interface " +
                "in an abstract class, you can write code that works with the abstract type without " +
                "knowing the specific subclass. This makes your code more flexible and easier to maintain " +
                "as the application grows.\n\n" +
                "The calling code only needs to know about Shape, not Circle.",
                "Shape s = new Circle();\n" +
                "System.out.println(s.getArea()); // works without knowing it's a Circle"),

            new LessonStep(5, "Abstract Classes vs Regular Classes",
                "The key differences: an abstract class cannot be instantiated, can have abstract methods " +
                "with no body, and is designed to be extended. A regular class can be instantiated, all " +
                "its methods must have bodies, and it may or may not be extended. Use an abstract class " +
                "when you want to provide a common base with some shared behaviour but also enforce that " +
                "subclasses fill in the gaps.",
                "// Abstract - cannot instantiate, defines the contract\n" +
                "public abstract class Shape { abstract double getArea(); }\n\n" +
                "// Concrete - can instantiate, fulfils the contract\n" +
                "public class Rectangle extends Shape {\n" +
                "    double width, height;\n" +
                "    double getArea() { return width * height; }\n" +
                "}")
        ))
    );

    public List<Lesson> getAll() {
        return LESSONS;
    }

    public Optional<Lesson> getById(int id) {
        return LESSONS.stream().filter(l -> l.id() == id).findFirst();
    }
}
