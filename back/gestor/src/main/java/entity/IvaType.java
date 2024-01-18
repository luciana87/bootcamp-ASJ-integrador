package entity;

public class IvaType {
	
	private int id;
	private String name;
	
	public IvaType () {}

	public IvaType (String name) {
		this.name = name;
	}
	
	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	

}
