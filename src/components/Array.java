class Array {
    public static int[] leftRotateBy1(int arr[]) {
        int temp = arr[0];
        for (int i = 1; i < arr.length; i++) {
            arr[i - 1] = arr[i];
        }
        arr[arr.length - 1] = temp;
        return arr;
    }

    public static void printArray(int arr[]) {
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }

    public static void main(String args[]){
        int arr[5] = {1,2,3,4,5};
        printArray(arr);
        leftRotateBy1(arr);
        printArray(arr);
    }
}