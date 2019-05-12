<%@include file="includes/header.jsp"%>

<div class="panel panel-primary">

    <div class="panel-heading">
        <h3 class="panel-title">Profile</h3>
    </div>
    
    <div class="panel-body">
    
            <form:form modelAttribute="userEditEmailForm" class="form-horizontal" role="form">

	            <div class="form-group">
					<form:label path="email_new" class="col-lg-2 control-label">New email</form:label>
					<div class="col-lg-10">
						<form:input path="email_new" class="form-control" placeholder="Email" />
						<form:errors cssClass="error" path="email_new" />
                        <p class="help-block">Enter new email.</p>
					</div>
				</div>

		            <div class="form-group">
						<form:label path="email_confirm" class="col-lg-2 control-label">Re-enter email</form:label>
						<div class="col-lg-10">
							<form:input path="email_confirm" class="form-control" placeholder="Email" />
							<form:errors cssClass="error" path="email_confirm" />
							<p class="help-block">Re-enter you new email</p>
						</div>
					</div>
            
	            <div class="form-group">
	                <div class="col-lg-offset-2 col-lg-10">
	                    <button type="submit" class="btn btn-primary">Update</button>
	                </div>
	            </div>
            
        </form:form>
            
    </div>
        
</div>

<%@include file="includes/footer.jsp"%>
	