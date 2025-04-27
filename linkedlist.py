class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.length += 1
        return True

    def prepend(self, value):
        new_node = Node(value)
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head = new_node
        self.length += 1
        return True

    def get(self, index):
        # check for valid
        if index > self.length or index < 0:
            # print("Index Out of range")
            return
        else:
            temp = self.head
            for _ in range(index):
                temp = temp.next
            return temp.value

    def pop(self):
        if self.length == 0:
            return None
        pre, temp = self.head, self.head
        while temp.next is not None:
            pre = temp
            temp = temp.next
        self.tail = pre
        self.tail.next = None
        if self.length == 1:
            self.head = None
            self.tail = None
        self.length -= 1
        return temp

    def reverse_list(self):
        prev, curr = None, self.head
        while curr is not None:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        # return prev
        self.head = prev
        # self.tail = curr


    def array_linked_list(self):
        temp = self.head
        ll_array = []
        while temp is not None:
            ll_array.append(temp.value)
            temp = temp.next
        return ll_array


my_ll = LinkedList()
my_ll.append(1)
my_ll.append(2)
my_ll.append(3)

print(my_ll.array_linked_list())
my_ll.reverse_list()
print(my_ll.array_linked_list())
# print(my_ll.head)
# print(my_ll.tail)

# print("Popped:", my_ll.pop().value)  # Should print 3
# print("Popped:", my_ll.pop().value)  # Should print 2
# print("Popped:", my_ll.pop().value)  # Should print 1
# print("Popped:", my_ll.pop())  # Should print None
