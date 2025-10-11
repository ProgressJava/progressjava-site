---
sidebar_position: 2
---

# 🧱 Variables & Data Types

Java is strongly typed — every variable must have a declared type.

## ✏️ Declaring Variables

```java title="Variables.java"
int age = 12;
double price = 9.99;
boolean isActive = true;
char grade = 'A';
String name = "Progress Java";

System.out.println(age + ", " + name);
````

Each declaration includes:

* a **type** (`int`, `double`, `boolean`, etc.)
* a **name** (identifier)
* and optionally, an **initial value**

---

## 🔢 Primitive Data Types

| Type      | Example                | Description           |
| :-------- | :--------------------- | :-------------------- |
| `byte`    | `byte b = 10;`         | small integers        |
| `short`   | `short s = 3000;`      | rarely used           |
| `int`     | `int n = 42;`          | most common integer   |
| `long`    | `long big = 1000000L;` | add `L` suffix        |
| `float`   | `float f = 3.14f;`     | decimal, less precise |
| `double`  | `double d = 2.718;`    | more precise          |
| `char`    | `char c = 'J';`        | single character      |
| `boolean` | `boolean ok = true;`   | true or false         |

---

## 🧩 Reference Types

Reference types store **objects**, not raw values.

```java
String message = "Hello, Java!";
Integer number = 42;
List<String> names = List.of("Suren", "Kallem", "Maya");
```

---

🧠 Try It

1. Create a Java file named `Variables.java`.
2. Declare all 8 primitive types.
3. Print them using `System.out.println()`.
4. Change a few values and recompile.

````

---

### 🔁 `/docs/fundamentals/control-flow.md`
```markdown
---
sidebar_position: 2
---

# 🔁 Control Flow

Control flow statements decide *what happens next* in your program.

---

## 🧭 If / Else

```java title="IfElse.java"
int number = 7;

if (number % 2 == 0) {
  System.out.println("Even");
} else {
  System.out.println("Odd");
}
````

---

## 🔀 Switch (Modern Syntax)

```java title="Switch.java"
String role = "ADMIN";

switch (role) {
  case "ADMIN" -> System.out.println("Full Access");
  case "USER"  -> System.out.println("Limited Access");
  default      -> System.out.println("Guest");
}
```

---

## 🔂 Loops

```java
for (int i = 0; i < 3; i++) System.out.println(i);

int j = 0;
while (j < 3) {
  System.out.println(j);
  j++;
}

for (String s : List.of("A", "B", "C")) {
  System.out.println(s);
}
```

---

💡 Try It

* Write a loop that prints the sum of numbers 1–100.
* Convert an `if/else` chain to a `switch` expression.

````

---

### 👤 `/docs/fundamentals/objects-and-classes.md`
```markdown
---
sidebar_position: 3
---

# 👤 Objects & Classes

Everything in Java revolves around **classes** and **objects**.

---

## 🧱 A Simple Class Example

```java title="PersonDemo.java"
class Person {
  String name;
  int age;

  Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  String greet() {
    return "Hi, I'm " + name + " (" + age + ")";
  }
}

public class PersonDemo {
  public static void main(String[] args) {
    Person p = new Person("Suren", 12);
    System.out.println(p.greet());
  }
}
````

---

## 🔒 Encapsulation

Hide data and expose it safely through methods.

```java
class Account {
  private double balance;

  public void deposit(double amt) {
    if (amt > 0) balance += amt;
  }

  public double getBalance() {
    return balance;
  }
}
```

---

## 🐾 Inheritance

```java
class Animal { String speak() { return "???"; } }
class Dog extends Animal { String speak() { return "Woof!"; } }

Animal a = new Dog();
System.out.println(a.speak()); // "Woof!"
```

---

🧠 Try It

* Add a `toString()` method to `Person`.
* Create a subclass `Employee` that extends `Person` with a `salary` field.

````

---

### 📚 `/docs/fundamentals/collections.md`
```markdown
---
sidebar_position: 4
---

# 📚 Collections & Generics

Collections let you store and manage groups of objects efficiently.

---

## 🧺 Common Interfaces

| Interface | Description | Implementations |
|:--|:--|:--|
| `List` | Ordered, allows duplicates | `ArrayList`, `LinkedList` |
| `Set` | Unique elements | `HashSet`, `TreeSet` |
| `Map` | Key-value pairs | `HashMap`, `TreeMap` |

---

## 💻 Example

```java title="CollectionsDemo.java"
List<String> names = new ArrayList<>();
names.add("Suren");
names.add("Kallem");

Set<String> unique = new HashSet<>(names);

Map<String, Integer> ageByName = new HashMap<>();
ageByName.put("Suren", 12);

System.out.println(names.get(0));
System.out.println(unique.contains("Suren"));
System.out.println(ageByName.get("Suren"));
````

---

## 🧩 Generics

```java
List<Integer> numbers = List.of(1, 2, 3);
int first = numbers.get(0); // type-safe
```

---

## 🧠 Streams (Preview)

```java
List<String> upper =
  names.stream()
       .filter(n -> n.length() > 4)
       .map(String::toUpperCase)
       .toList();

System.out.println(upper);
```

---

💡 Try It

* Build a `Map<String, List<Integer>>` of subjects → test scores.
* Compute averages using loops or streams.

````

---

### ⚠️ `/docs/fundamentals/exceptions.md`
```markdown
---
sidebar_position: 5
---

# ⚠️ Exceptions & Error Handling

Exceptions help your program recover gracefully when things go wrong.

---

## 🧱 Try–Catch

```java title="ExceptionsDemo.java"
try {
  int x = 10 / 0;
  System.out.println(x);
} catch (ArithmeticException e) {
  System.out.println("Error: " + e.getMessage());
}
````

---

## ✅ Checked vs Unchecked

* **Checked:** must be declared or handled (`IOException`)
* **Unchecked:** runtime errors like `NullPointerException`

```java
void readFile() throws IOException {
  Files.readString(Path.of("missing.txt"));
}
```

---

## 💾 Try-With-Resources

Automatically closes files and streams.

```java
try (var reader = Files.newBufferedReader(Path.of("data.txt"))) {
  System.out.println(reader.readLine());
} catch (IOException e) {
  System.out.println("File issue: " + e.getMessage());
}
```

---

## 🧩 Custom Exceptions

```java
class DomainException extends RuntimeException {
  DomainException(String msg) {
    super(msg);
  }
}
```

---

💡 Try It

* Wrap a file read in try-with-resources.
* Throw a custom exception on invalid input.
