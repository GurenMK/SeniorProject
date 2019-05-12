<%@include file="includes/header.jsp"%>

<div class="panel panel-primary">

    <div class="panel-heading">
        <h3 class="panel-title">Profile</h3>
    </div>
    
    <div class="panel-body">
    
            <form:form modelAttribute="userEditPasswordForm" class="form-horizontal" role="form">

	            <div class="form-group">
					<form:label path="password_new" class="col-lg-2 control-label">New password</form:label>
					<div class="col-lg-10">
						<form:input type="password" path="password_new" class="form-control" placeholder="Password" />
						<form:errors cssClass="error" path="password_new" />
						<p class="help-block">Enter your new password.</p>
					</div>
				</div>

		            <div class="form-group">
                        <form:label path="password_verify" class="col-lg-2 control-label">Re-enter password</form:label>
                        <div class="col-lg-10">
                            <form:input type="password" path="password_verify" class="form-control" placeholder="Password" />
                            <form:errors cssClass="error" path="password_verify" />
                            <p class="help-block">Re-enter your new password.</p>
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
	