package com.ufcg.si1.util;

import java.io.Serializable;

public class ObjWrapper<T> implements Serializable {

    /**
	 * 
	 */
	private static final long serialVersionUID = -1896029034161288589L;
	private T obj;

    public ObjWrapper(T obj) {
        this.obj = obj;
    }

    public ObjWrapper(){}

    public T getObj() {
        return obj;
    }

}

