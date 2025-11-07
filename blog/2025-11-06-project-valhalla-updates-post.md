---
slug: project-valhalla-updates
title: Java's Project Valhalla Updates
authors: suren
tags: [hello, docusaurus]
---

One line of code just rewrote the rules of performance.

## The Problem We’ve Lived With Since 1995:

```java
// TODAY (Java 21+)
class User {
    private final Optional<Integer> userId;  // 😩 Wrapper bloat
}
```

Java forces a brutal choice:

1. Primitives (int, double)
   - fast . stored directly, no overhead
   - Not objects `List <int>` illegal, `Optional<int>` compiler error
2. Wrappers (Integer, Double)
   - Works in generics, collections, APIs
   - 4× memory, boxing/unboxing, GC thrashing, cache misses

**Tradeoff = Pain.** Every Java dev has paid the tax.

##Enter Project Valhalla (JDK 23+ Preview)

```java
// TOMORROW
class User {
    private final Optional<int> userId;  // ✅ Primitive speed + Object API
}
```

Valhalla delivers Value Classes + Primitive Objects:
- Acts like an object (nullable, generic-ready)
- Runs like a primitive (stack-allocated, zero boxing)

## Why This Changes Everything
1. Billions of heap objects vanish → lower latency, happier GC
2. Collections become truly efficient → `ArrayList<int>` = raw array speed
3. Cleaner APIs → no more int... vs Integer... overload wars
4. Legacy migration is trivial → swap Integer → int in generics

> Abstraction should cost nothing. – Project Valhalla

## Try It Today (JDK 23 Early Access)
```
jshell --enable-preview
```

```java
val point = record Point(int x, int y) {}
List<Point> points = List.of(new Point(1,2), new Point(3,4));
System.out.println(points);
// → [Point[x=1, y=2], Point[x=3, y=4]]
```

No heap allocation. Pure stacks.

**TL;DR:** Valhalla = Object flexibility + Primitive performance.

Java just got fast again.