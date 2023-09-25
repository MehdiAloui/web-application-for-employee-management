package net.javaguides.springboot.data;


public class DomainBean {
	String type;
    Long number;
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Long getNumber() {
		return number;
	}
	public void setNumber(Long number) {
		this.number = number;
	}
	public DomainBean(String type, Long number) {
		super();
		this.type = type;
		this.number = number;
	}
	public DomainBean() {
		// TODO Auto-generated constructor stub
	}
    
   
	

}
